param(
  [string]$OutputDir = (Join-Path $PSScriptRoot "..\icons")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#15202b")
$fgColor = [System.Drawing.ColorTranslator]::FromHtml("#1d9bf0")

foreach ($size in @(16, 48, 128)) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  try {
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)

    # Fill rounded rect
    $brush = New-Object System.Drawing.SolidBrush($bgColor)
    $g.FillRectangle($brush, 0, 0, $size, $size)
    $brush.Dispose()

    # Draw "X" if icon is large enough
    if ($size -ge 48) {
      $fs = [int]($size * 0.5)
      $font = New-Object System.Drawing.Font("Segoe UI", $fs, [System.Drawing.FontStyle]::Bold)
      $tb = New-Object System.Drawing.SolidBrush($fgColor)
      $sf = New-Object System.Drawing.StringFormat
      $sf.Alignment = [System.Drawing.StringAlignment]::Center
      $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
      $r = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
      $g.DrawString("X", $font, $tb, $r, $sf)
      $font.Dispose(); $tb.Dispose(); $sf.Dispose()
    } else {
      # 16px: small dot
      $ds = [int]($size * 0.4)
      $dx = [int](($size - $ds) / 2)
      $db = New-Object System.Drawing.SolidBrush($fgColor)
      $g.FillEllipse($db, $dx, $dx, $ds, $ds)
      $db.Dispose()
    }

    $out = Join-Path $OutputDir "icon$size.png"
    $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "OK: $out"
  } finally {
    $g.Dispose(); $bmp.Dispose()
  }
}
