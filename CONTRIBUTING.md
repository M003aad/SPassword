# Contributing to SPassword

Thank you for considering a contribution.

## Bug reports

Before opening a report, check the repository's existing issues to see whether the problem has already been reported. Include:

- A clear, descriptive title and the steps needed to reproduce the issue.
- Expected behavior and what happened instead.
- Your browser and version, operating system, and SPassword version.
- Relevant error messages or screenshots, with private information removed.

Open an issue at **[add repository issues URL]**. Do not post security vulnerabilities in public issues; follow [SECURITY.md](SECURITY.md) instead.

## Feature proposals

Open an issue at **[add repository issues URL]** before starting a substantial change. Describe the problem the feature would solve, the proposed behavior, and any alternatives or user-interface changes. This gives the maintainer a chance to discuss scope before implementation.

## Local development

1. Clone or download the repository: **[add repository URL]**.
2. Open the project folder containing `manifest.json`.
3. In your browser, open the extensions management page, enable **Developer mode**, and choose **Load unpacked**. Select the project folder.
4. Make changes to the relevant extension files. The popup is defined in `popup.html`, its behavior in `popup.js`, and its styles in `style.css`.
5. To test changes, reload the unpacked extension from the browser's extensions page, open its popup, and verify password generation and copying.

No build or package-install step is currently documented for this repository.

## Pull request standards

- Keep changes focused and explain the problem and solution in the pull request description.
- Link related issues and include steps used to verify the change.
- Update documentation when behavior or setup instructions change.
- Avoid including secrets, real passwords, or unrelated generated files.
- Confirm the extension loads without errors and manually verify affected behavior before requesting review.

The maintainer may request changes or additional testing before merging.
