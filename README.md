# PIE Tracker — Personal Income Expense Tracker

**Track. Analyze. Manage. Grow.**

A private, flexible tracker for what comes in, what goes out and what is left — in any currency. PIE Tracker runs in your browser, installs like an app, works offline, and keeps your data on your own device.

**Open the app:** [bkar81.github.io/pie](https://bkar81.github.io/pie/)

## Screenshots

<table>
<tr>
<td align="center"><img src="screenshots/01-home-month.png" width="220" alt="Home"><br><sub>Home</sub></td>
<td align="center"><img src="screenshots/02-add-transaction.png" width="220" alt="Add transaction"><br><sub>Add transaction</sub></td>
<td align="center"><img src="screenshots/03-currency-picker.png" width="220" alt="Currency picker"><br><sub>Currency picker</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/04-analysis-overview.png" width="220" alt="Analysis · Overview"><br><sub>Analysis · Overview</sub></td>
<td align="center"><img src="screenshots/05-analysis-cashflow.png" width="220" alt="Analysis · Cash flow"><br><sub>Analysis · Cash flow</sub></td>
<td align="center"><img src="screenshots/06-analysis-categories.png" width="220" alt="Analysis · Categories"><br><sub>Analysis · Categories</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/07-analysis-insights.png" width="220" alt="Analysis · Insights"><br><sub>Analysis · Insights</sub></td>
<td align="center"><img src="screenshots/08-analysis-statement.png" width="220" alt="Analysis · Statement"><br><sub>Analysis · Statement</sub></td>
<td align="center"><img src="screenshots/09-analysis-drilldown.png" width="220" alt="Analysis · Drill-down"><br><sub>Analysis · Drill-down</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/10-analysis-filters.png" width="220" alt="Analysis · Filters"><br><sub>Analysis · Filters</sub></td>
<td align="center"><img src="screenshots/11-calendar.png" width="220" alt="Calendar"><br><sub>Calendar</sub></td>
<td align="center"><img src="screenshots/12-calendar-day.png" width="220" alt="Calendar · Day details"><br><sub>Calendar · Day details</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/13-settings-wallet.png" width="220" alt="Settings · Wallet"><br><sub>Settings · Wallet</sub></td>
<td align="center"><img src="screenshots/14-settings-category.png" width="220" alt="Settings · Category"><br><sub>Settings · Category</sub></td>
<td align="center"><img src="screenshots/15-add-category.png" width="220" alt="Add category"><br><sub>Add category</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/16-add-account-type.png" width="220" alt="Add account type"><br><sub>Add account type</sub></td>
<td align="center"><img src="screenshots/17-settings-data.png" width="220" alt="Settings · Data"><br><sub>Settings · Data</sub></td>
<td align="center"><img src="screenshots/18-settings-general.png" width="220" alt="Settings · General"><br><sub>Settings · General</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/19-screen-privacy-setup.png" width="220" alt="Screen privacy · Setup"><br><sub>Screen privacy · Setup</sub></td>
<td align="center"><img src="screenshots/20-recovery-code.png" width="220" alt="Screen privacy · Recovery code"><br><sub>Screen privacy · Recovery code</sub></td>
<td align="center"><img src="screenshots/21-screen-privacy-on.png" width="220" alt="Screen privacy · Settings"><br><sub>Screen privacy · Settings</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/22-access-modes.png" width="220" alt="Access modes"><br><sub>Access modes</sub></td>
<td align="center"><img src="screenshots/23-entry-only-home.png" width="220" alt="Entry only · Home"><br><sub>Entry only · Home</sub></td>
<td align="center"><img src="screenshots/24-view-only-home.png" width="220" alt="View only · Home"><br><sub>View only · Home</sub></td>
</tr>
<tr>
<td align="center"><img src="screenshots/25-unlock.png" width="220" alt="Unlock"><br><sub>Unlock</sub></td>
<td align="center"><img src="screenshots/26-about.png" width="220" alt="About"><br><sub>About</sub></td>
</tr>
</table>

## What PIE Tracker does

PIE Tracker keeps your transactions organized around the things that matter: **where money came from, where it went, which account it moved through, and whether a card payment still needs settling.**

## Core features

- 🏠 **Home** — View, search and edit transactions by day, week, month, year or a custom range (up to 60 days). Income, expenses and net are shown at the top.
- ➕ **Fast entry** — Expense or income, date, amount and currency, category, account and note. Your usual type and currency are already selected; change them only when needed. A built-in calculator fills the amount.
- 💼 **Wallet** — Account types grouped as **Income** or **Expense**, each with its own accounts. The group decides whether an amount adds or subtracts.
- 🗂️ **Categories** — Each category is Income, Expense or Both, so the entry screen only offers categories that fit.
- 💱 **Currencies** — Enter any currency. PIE Tracker never converts, and never adds different currencies together.
- 📊 **Analysis** — Overview, cash flow, period breakdown, categories, accounts, card settlements, insights and a statement grid. Filters, comparisons and drill-down throughout.
- 📅 **Calendar** — Daily income and expenses, pending card payments, and a ★ on days with another currency.
- 💳 **Card tracking** — Separate card spending from card payments and see paid versus pending amounts.
- 📥 **CSV import** — Build rows in Excel, save as CSV and import, with a preview before anything is saved.
- 💾 **Data control** — Stored on your device. JSON backups and CSV export any time.
- ☁️ **Google Drive sync** — Optional and off by default. Family devices signed in to the same Google account share one data file.
- 👤 **Entered by** — Every entry records the name of the phone it was made on, so you can see and filter who entered what.
- 🔒 **Screen privacy** — Optionally restrict a phone to **Entry only** or **View only** until a code is entered. Off by default.
- ↩️ **Back button** — Android's back button closes popups and steps back through screens instead of closing the app.

## How income and expenses add up

Every **account type** belongs to a group: **Expense** or **Income**. The group is the only thing that decides the direction of an amount.

- Amounts are always entered as **positive** numbers.
- Income is shown in **green**, expenses in **red**.
- **Net = Income − Expenses.**

```
Salary  → Employer / Acme Corp    → ₹92,000   income
Lunch   → Credit Card / HDFC      → ₹420      expense (pending)
Net                                → ₹91,580
```

A bank account that both receives and pays money is added twice — once under Income and once under Expense. To tell similar accounts apart, add a note in brackets, for example `ICICI (Purp 1)` and `ICICI (Purp 2)`.

**Categories** have three groups:

| Category group | Offered when entering |
|---|---|
| Income | Income only (e.g. Salary, Sales) |
| Expense | Expenses only (e.g. Food, Rent) |
| Both | Income and expenses (e.g. Refund, Gift) |

When income is entered for a period, Home, Calendar and Analysis show **Income / Expenses / Net**. If there is no income in the period, everything related to income is hidden and the app looks like a plain expense tracker.

## Currencies

- Set a **default currency** in **Settings → General**. It is preselected for every new entry on that phone.
- Change the currency of a single entry by tapping the currency chip beside the amount. Add a new currency right from that list.
- Codes and symbols can be up to 3 characters (`₹`, `$`, `S$`, `AED`). Leave the symbol blank to show the code instead. Ten common symbols are offered as quick picks.
- Totals are kept **per currency**. ₹10,000 and $100 are always shown separately and never added together. Analysis charts show one currency at a time; the others are listed underneath.

## Analysis

Analysis is one screen with shared controls and collapsible cards. Cards start expanded and remember if you collapse them.

**Controls**
- **Expense / Income / Both** — remembered on the phone. Hidden when the period has no income.
- **Period** — Day, Week, Month, Year or Custom, using the arrows and date at the top.
- **Search** — notes, categories and accounts.
- **Currency** — which currency the charts show.
- **Filters** — accounts and sub-accounts, categories and subcategories, who entered it, and payment status (Pending, Paid, Direct). Every list is multi-select with an **All** option: untick one item and All unticks; tick All and everything is selected.
- **Comparison** — vs the previous period, vs the same period last year, or off.

**Cards**
1. **Overview** — Income, Expenses, Net with the share of income kept, and card payments outstanding. Other currencies are listed separately.
2. **Cash flow / Trend** — daily, weekly, monthly or yearly bars with a net line. Tap a bar to open that period.
3. **Breakdown** — days in a week, weeks in a month or months in a year, with income, expenses and net per row.
4. **Where it goes / Where it comes from** — expense and income categories with share and change vs the comparison period.
5. **Accounts** — paid from / received in, with paid and pending amounts for card accounts.
6. **Card settlements** — what is pending per card, with a shortcut to mark items paid on Home.
7. **Insights** — income left after expenses, largest expenses and income, biggest category changes, recurring spending (same note in 3 of the last 4 months) and top notes.
8. **Statement** — a bank-statement style grid: Date, Description, Account, Category, Entered by, Income, Expense and a running Total for the selected period, with a totals row. It scrolls sideways inside its card and shows 10 rows per page. Export it as **CSV** (opens in Excel) or **share it as an image** (copy, save or share).

**Drill-down** — tap a category or account to see its subcategories or sub-accounts, then the individual transactions. A breadcrumb and the back button take you back up.

## Calendar

- Each day shows income (green) and expenses (red) in the default currency.
- A red dot marks pending card payments.
- A blue ★ in the corner marks a day with an entry in another currency.
- Tap a day to see its income and expenses; tap an entry to open it.

## How card payment tracking works

A credit-card purchase is an **expense**. Paying the card later is a **settlement**, not another expense, so nothing is counted twice.

```
Expense      → HDFC Regalia → ₹2,500 → Pending
Card payment → mark it Paid (Home → Pending → select → Mark Paid)
Result       → HDFC Regalia outstanding reduced by ₹2,500
```

- **Payment / settlement account** — for credit cards: purchases stay pending until marked paid.
- **Direct account** — UPI, bank accounts, debit cards, wallets or cash: treated as paid at once.
- Set this per account type in **Settings → Wallet**.

## Settings

| Tab | What's in it |
|---|---|
| **Wallet** | Income accounts, Expense accounts and Currencies, each a collapsible section. Creating or editing an account type starts with the Expense/Income toggle; the name box shows example names for the chosen group. |
| **Category** | Income, Expense and Both sections. Creating a category starts with the Income / Expense / Both choice. |
| **Data** | Google Sync, Settings only, Data only, Complete backup, and CSV import / export — each collapsible. |
| **General** | This phone's "Entered by" name, default type and currency, text size, pinch-zoom, and screen privacy. |

### What is shared and what stays on each phone

| Shared through Google Drive sync | Kept on each phone only |
|---|---|
| Transactions (each with its "Entered by" name) | "Entered by" name |
| Accounts, categories and currencies | Default type (Expense/Income) and default currency |
| The screen-privacy code (as a verifier, never the code itself) | Text size and pinch-zoom |
| | Access mode (Admin / Entry only / View only) and auto-lock |
| | Analysis view, collapsed cards, comparison and trend period |

## Import and export

**CSV import** (Settings → Data → CSV import / export)

Download the template, fill it in Excel or Google Sheets, save as CSV and import it. A preview shows what will be added, created and skipped before anything is saved.

| Column | Required | Notes |
|---|---|---|
| Date | Yes | `DD-MM-YYYY`, `MM-DD-YYYY` (choose in the preview), `YYYY-MM-DD`, or month names like `23-Oct-2026` |
| Type | No | `Income` or `Expense`; blank uses the phone's default type |
| Category, Subcategory | Category yes | Matched by name; missing ones are created |
| Account Type, Account | Account Type yes | Matched by name within the Type's group; missing ones are created |
| Amount | Yes | Positive number; `1,02,500` and `92000.00` both work |
| Currency | No | 3-letter code; blank uses the phone's default currency |
| Paid | No | `Yes`/`No` (or `Paid`/`Pending`) for card accounts |
| Note | No | Commas and quotes are handled |
| Entered By | No | Name of who entered it; blank uses this phone's name |

- **Add to existing** or **Replace all** transactions.
- Possible duplicates (same date, amount, currency, account and note) are flagged and skipped by default.
- Rows with errors are listed with the reason and skipped.

**JSON backups** — Settings only, Data only and Complete backup. Restoring data can replace or add to what's on the phone. Backups never include screen-privacy details. Files from older versions are upgraded automatically; any setting missing from a file falls back to its default.

**Sample data** — see [SAMPLE-DATA.md](./SAMPLE-DATA.md) to load a demo dataset.

## Google Drive sync and family use

Sync is **optional and off by default**. When connected (Settings → Data → Google Sync), your settings and transactions are kept in a single file, `pie-sync.json`, in your Google Drive.

- **Family or team use:** sign every device in to the **same Google account** for PIE Tracker sync. Everyone enters their own transactions and they all end up in the one shared file.
- **Sync any time** with the orange cloud at the top. A dot on the cloud means changes haven't been synced yet.
- **Merging is per record.** Every entry gets its own unique ID when it is created, so two people entering exactly the same amount, account, category and note create **two** entries — they are never merged into one. If the *same* entry was edited on two phones, the phone that syncs second keeps its version.
- **Who entered what:** set each phone's name in **Settings → General → This phone → Entered by** (for example the person's name). It is stamped on every entry made there, shown under each entry, and available as a filter and a Statement column in Analysis.
- Sync only happens when someone taps the cloud; PIE Tracker works fully offline in between.
- On a phone with screen privacy locked, sync never asks questions: it merges or restores on its own.
- PIE Tracker only asks Google for the `drive.file` permission, which lets it see **only the files it created** — nothing else in your Drive.

## Screen privacy

Screen privacy lets the owner hand a phone to someone — a family member, an employee, an agent — and decide what that person can do with it. It is **off by default**: if you never set it up, the phone has full access and nothing changes.

### The three access modes

Each phone has one mode. It only applies while the phone is locked; entering the code always gives full access until the phone locks again.

| Mode | Screens | What the person can do |
|---|---|---|
| **Admin** (full access) | All | Everything: all data, settings, accounts, categories and currencies. This is the owner's phone. |
| **Entry only** | Home, About | Add income and expenses. Home shows **only entries not yet synced** — with all the usual Day/Week/Month/Year/Custom views, totals and search, so a person copying from a book can still tally their work. Once synced, those entries disappear from their view. They can edit or delete entries that haven't been synced yet. They can't create or change accounts, categories or currencies. |
| **View only** | Home, Analysis, Calendar, About | See all data and reports. Can't add, edit or delete anything, and can't open Settings (not even text size or pinch-zoom). |

Hidden screens don't appear anywhere: no tab, no lock icon, no greyed-out button. The tab bar simply has fewer buttons, and the About page only describes what that phone can use.

**Example:** three helpers enter expenses from receipts. Each helper's phone is set to *Entry only* with their name as "Entered by". They add entries during the day and tap the cloud to sync. After syncing, their screen is empty again. The owner sees everything on their own *Admin* phone and can filter Analysis by "Entered by" to see who entered what.

### How "not yet synced" works

PIE Tracker remembers exactly what each entry looked like at the last sync. An entry is shown on an *Entry only* phone if it was added after the last sync, or changed since. Everything already synced — including entries that arrived from other phones — stays on the phone but is hidden while it is locked. The cloud's dot shows that unsynced entries exist.

Because the data stays on the phone, switching modes never needs a sync. When the owner unlocks an Entry-only phone, every screen and every entry that phone has (up to its last sync) is visible straight away. Lock it again and the person is back to seeing only their unsynced entries.

### What it is — and what it isn't

- It **restricts what a person sees and does** in the app. This keeps curious eyes away.
- It is **not encryption**. The financial data is stored as normal so the app, backups and sync keep working. Someone with technical skills and access to the phone — or to the shared Google account's Drive — could still read it. Use it for everyday control, not as protection against a determined attacker.

### Setting it up

On **your own phone** first: Settings → General → Screen privacy → **Set up**.

1. Choose a **code** of 4–20 characters (letters, numbers and symbols; no spaces).
2. Enter a **recovery email** — a Google account you can sign in with. Use your own account, not the shared sync account.
3. Choose this phone's mode — **Admin** for your own phone.
4. Save the **recovery code** that appears. It is shown only once.
5. Sync, so the code reaches the other devices.

Then on **each helper's phone**: connect Google Sync with the shared account, sync once to receive the code, set **This phone → Entered by** to the person's name, and set **Screen privacy → Access on this phone** to *Entry only* or *View only*. Tap **Lock now**.

| Shared by all devices (synced) | Chosen on each phone (never synced) |
|---|---|
| The code (stored as a verifier) | Access mode: Admin, Entry only or View only |
| The recovery code (stored as a verifier) | "Entered by" name |
| The recovery email (stored as a fingerprint) | How soon the phone locks again |

One code works on every phone. Changing it on one phone changes it on all of them after their next sync.

### Unlocking

Tap the **PIE icon** at the top left **three times** within a few seconds. The border of the search box (or the main card on screens without one) changes colour with each tap — grey, blue, green — and on the third tap the **Enter code** sheet appears. Nothing on screen says this exists.

After the right code the phone has full access until it locks again:

- when PIE Tracker has been in the background longer than the chosen time (immediately, or 1, 2, 5 or 15 minutes; default 2),
- when the app is closed, or
- when you tap **Lock now** in Settings → General → Screen privacy.

On a *View only* phone, trying to change an entry asks for the code.

### Wrong codes

The sheet shakes on a wrong code. After 5 wrong tries, the phone waits 30 seconds before accepting another try. Each further wrong try doubles the wait, up to 15 minutes. The count survives closing and reopening the app.

### If you forget the code

Tap the icon three times, then **Forgot code?**, and use either:

1. **Recovery code** — the `PIE-XXXX-XXXX-XXXX` code shown at setup. Works offline.
2. **Verify with Google** — sign in with the Google account you gave as the recovery email. PIE Tracker only reads the email address from that sign-in, compares it with the stored fingerprint, and then discards it. Drive sync is not affected, even if that phone syncs with a different Google account.

Then set a new code, and sync to send it to your other devices. If you lose the recovery code, make a new one from Settings → General → Screen privacy while unlocked; the old one stops working.

### What is actually stored

PIE Tracker never stores the code itself.

- When a code is set, the app generates a random **salt** and runs the code through **PBKDF2-SHA256** (250,000 rounds). Only the result — the **verifier** — and the salt are saved.
- When someone types a code, the same calculation runs and the result is compared with the verifier. A match unlocks; anything else doesn't.
- The **recovery code** is stored the same way.
- The **recovery email** is stored only as a SHA-256 fingerprint: enough to check "is this the same email?", not enough to read the address.

Example: if the code is `Pie@2026`, the synced file contains something like `salt: q3V…` and `verifier: 9fK…` — never `Pie@2026`.

### For your own deployment

**Verify with Google** uses the same OAuth client as Drive sync, with the `openid email` scopes. If your Google Cloud project is in **Testing** mode, add each recovery email as a **test user**, otherwise Google will refuse that sign-in.

## Display

- **Text size** — Normal, Large or Larger, per phone. Layout widths stay the same; long text wraps or shortens.
- **Allow pinch-zoom** — off by default; turn on to zoom with two fingers. Per phone.

## Installing PIE Tracker

When hosted (for example on GitHub Pages), PIE Tracker installs like a real app — "Add to Home Screen" on Android gives it its own icon and a full-screen launch, and it keeps working offline afterwards, even if the site later becomes unreachable. The About screen has **Check for updates**; a notice appears when a new version is ready.

## Data & privacy

Your data is kept in the browser's local storage on the device where you use it. PIE Tracker needs no server or account for the core app.

Google Drive sync is **optional and off by default**. Nothing is sent anywhere unless you connect it in **Settings → Data → Google Sync**, and turning it off returns PIE Tracker to being fully offline.

**Important:** browser storage is not a substitute for backups. Export a **Complete backup** regularly, especially before clearing browser data or changing devices.

See the [Privacy Policy](./privacy.html) and [Terms of Service](./terms.html).

## Sharing / forking PIE Tracker

This project is free to fork and reuse under the MIT license. Each copy keeps its own data in its own browser storage — there is no shared central database.

**Official deployment:** Google Drive sync is already configured. Users only need to go to **Settings → Data → Google Sync → Connect**, choose their Google account and authorize PIE Tracker. No Client ID is needed.

**Forking or deploying your own copy:** the Google OAuth Client ID in the source code is for the official deployment. **Replace it with your own Client ID before deploying**, and configure your OAuth client for your own site.

### Enabling Google Drive sync for your own copy

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a project (any name).
2. **APIs & Services → Library** → enable the **Google Drive API**.
3. Configure the **OAuth consent screen** (Google Auth Platform) with your app details and test users.
4. Create an **OAuth client ID** for a **Web application**. Under **Authorized JavaScript origins**, add your site's origin, for example `https://yourname.github.io`.
5. Copy the Client ID and replace the `PET_GOOGLE_CLIENT_ID` value in `index.html`.
6. Deploy and test **Settings → Data → Google Sync → Connect**.

PIE Tracker requests `drive.file` (only files it creates), which Google classifies as **non-sensitive**, plus `openid email` for screen-privacy recovery. Opening the app to the public needs only Google's lightweight brand verification (app name, logo, support email, privacy policy page). See **OAuth consent screen → Publish App**.

### Running your own copy

1. Fork or download this repository.
2. In your repo settings, enable **GitHub Pages** for the `main` branch (root folder). GitHub gives you a URL like `https://yourname.github.io/reponame/`.
3. Open that URL — PIE Tracker is live and installable.

## Version

PIE Tracker • Personal Income Expense Tracker • v1.0.0 • Local-first, with optional Google Drive sync

## License

MIT — see [LICENSE](./LICENSE). You're free to use, modify and share your own version.
