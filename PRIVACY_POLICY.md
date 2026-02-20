# Privacy Policy — X Background Customizer

Last updated: 2026-02-12

## Overview

X Background Customizer is a browser extension that changes the background color of X (formerly Twitter) dark mode from pure black to navy blue (Dim). It is a purely cosmetic extension.

## Data Collection

This extension **does not collect, store, transmit, or share any user data**.

Specifically:

- **No personal information** is collected (name, email, login credentials, etc.)
- **No browsing history** is recorded
- **No page content** is read or stored (tweets, messages, usernames, etc.)
- **No cookies** are accessed
- **No network requests** are made to any external server
- **No analytics or tracking** of any kind

## Data Storage

The extension stores a single preference (`enabled: true/false`) using the browser's built-in `browser.storage.sync` API. This data:

- Stays entirely within your browser
- Syncs only via your browser's built-in sync (e.g. Firefox Sync), if enabled
- Is never sent to the extension developer or any third party

## Permissions Explained

| Permission | Why it's needed |
|---|---|
| `storage` | To remember your on/off preference |
| Host access to `x.com` and `twitter.com` | To inject CSS that changes the background color |

The "Read and change your data on x.com" message shown by the browser is a standard warning for any extension that modifies page appearance. This extension only changes CSS colors and does not read any page data.

## Open Source

The full source code is publicly available at:
https://github.com/keeno1202/x-bg-customizer

You can verify that no data collection occurs by reviewing the code.

## Contact

If you have questions about this privacy policy, please open an issue on the GitHub repository.
