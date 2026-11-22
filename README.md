# SpendWise Dashboard

## Project Description

SpendWise is a responsive budget dashboard that helps users track their monthly spending. It shows spending cards for categories such as Food, Transport, Rent, Entertainment, Savings and Utilities. It also includes a Budget Tracker where users can set a monthly budget, add and delete expenses, and see their total spent, remaining balance and a status message. The layout adapts to desktop and mobile screens.

## Technologies Used

- HTML5
- CSS3 (responsive layout)
- JavaScript (arrays, loops, DOM manipulation and events)
- Google Fonts (Poppins)
- Git and GitHub (version control)
- Netlify (hosting and continuous deployment)
- Visual Studio Code

## GitHub Repository Information

- **Repository name:** spendwise-dashboard
- **Visibility:** Public
- **Repository link:** https://github.com/sowdaahmed2025-wq/spendwise-dashboard
- **Author:** Sowda Ahmed Abdi

## Live Netlify Website URL

**https://spendwise-sowda.netlify.app**

## Deployment Process Summary

1. Checked that `index.html` is at the top level of the project and that all links to CSS, JavaScript and images use relative paths with matching file names.
2. Pushed the project to a public GitHub repository.
3. Signed in to Netlify with GitHub, chose **Import from Git**, and selected the `spendwise-dashboard` repository.
4. Netlify detected a plain HTML project with no build command, and deployed from the `main` branch.
5. Changed the project visibility from Private to Public so anyone can open the site.
6. Renamed the site from the default `spendwise-dashboard-g7ss` to `spendwise-sowda`.
7. Tested continuous deployment by changing the heading to "Monthly Overview (Live on Netlify!)", committing and pushing to GitHub. Netlify rebuilt the site automatically and the change appeared live without any manual upload.
8. Tested the live site: all styles, scripts and images load, the Budget Tracker works (set budget, add expense, delete, clear all), the layout is responsive, and the browser console shows no errors.

## Challenges Encountered During Deployment

- **Private site by default:** after the first deploy, the site showed "This site is private" to visitors. I fixed it by changing "Who can see it" to **Public** in the project's Share settings and confirmed it in an Incognito window.
- **Finding the right settings:** Netlify's new interface looks different from older guides, so it took some exploring to find the Share, Manage and Rename options.
- **GitHub authorization:** connecting Netlify to GitHub required installing the Netlify app and confirming access with GitHub Mobile.
- **Stale browser tabs:** after renaming the site, an old tab still showed the previous address and an old copy of the page. I used a hard refresh (Ctrl + F5) and tested only on the new address.
- **Terminal typo:** a mistyped Git command caused a command-not-found error. I cleared the line and re-ran it correctly.

## Lessons Learned

- Relative paths and exact, case-sensitive file names are important for deployment.
- Connecting GitHub to Netlify makes deployment automatic: every push to `main` updates the live site.
- Always test the live site in a private (Incognito) window to see what other visitors see.
- Commit and push in small steps, and read terminal messages carefully.
- A hard refresh helps when the browser shows an old cached version of a site.