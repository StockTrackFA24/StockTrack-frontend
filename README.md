## How to Run

First, install all dependencies:
```bash
npm i
# or
pnpm install
```

Ensure that both auth and backend services and your MongoDB instance are configured (following the instructions in their README documents) and running

Create a copy of `.env.default`, name it `.env`, and place it in the same directory as `.env.default`
Populate the new `.env` file with the required values.
Ensure that `BACKEND_ADDRESS` and `AUTH_ADDRESS` begin with `http://` and match the addresses (and ports) of the auth and backend servers.
Run the included openssl command in the `env.default` file to generate the internal key for token storage

Then, run the server:

```bash
npm run dev
# or
pnpm dev
```

Navigate in your browser to `http://localhost:3000/` to view the StockTrack web UI.
Use a Chromium based browser for the best experience, as Firefox may experience some issues with formatting.

Note: login tokens expire after 1 hour. If you experience issues with requests being denied, log out and log back in.