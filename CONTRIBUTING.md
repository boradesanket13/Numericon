# Contributing Guidlines

When contributing to this repository, please first **ask to be assigned to an issue**.
Please note we have a [Code of conduct](https://github.com/Sanket1308/Simple-Calculator/blob/main/CODE_OF_CONDUCT.md), kindly follow it in all your interactions with the project.

Thank you for considering contributing to the repository. This guide details all the general information that one should know before contributing to the project. Please stick as close as possible to the guidelines. That way we ensure that you have a smooth experience contributing to this project.

# Steps to Contribute

1. Search for an open issue and ask to be assigned to it
2. Fork the Project after you are assigned the issue
3. Clone the repository (`git clone <repolink>`)
4. Create your another Branch (`git checkout -b <branchname>`)
5. Add your changes (`git add .`)
6. Commit your Changes (`git commit -m 'Add some newFeature'`)
7. Push to the Branch (`git push origin <branchname>`)
8. Open a Pull Request :tada:

## Pull Request Guidelines

1. Make sure your code is clean and formatted.
2. Make sure you have tested your code.
3. Write a detailed description what you added or changed.
4. Now pat yourself on the back and wait for your pull request to be checked and merged.
5. :tada: Your PR will be labeled with the `hacktoberfest-accepted` label!

> Random pull requests will be closed without any further notice and will be **labeled as spam**.

</br>
<hr class="solid">
</br>

# How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Sanket1308/Simple-Calculator/pulls)

- Take a look at the existing [Issues](https://github.com/Sanket1308/Simple-Calculator/issues) or [create a new issue](https://github.com/Sanket1308/Simple-Calculator/issues/new)!
- [Fork the Repo](https://github.com/Sanket1308/Simple-Calculator/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/Sanket1308/Simple-Calculator/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

## HOW TO MAKE A PULL REQUEST:

**1.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/Simple-Calculator.git
```

**2.** Navigate to the newly created LinkFree project directory:

```bash
cd Simple-Calculator
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/Sanket1308/Simple-Calculator.git
```

**4.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**5.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**6.** Make your changes to the source code.

**7.** Stage your changes and commit:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`. Instead, stage your changes for each file/folder

```bash
git add file/folder
```

```bash
git commit -m "<your_commit_message>"
```

**8.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**9.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**Congratulations!** You've made your first contribution to [**Simple-Calculator**](https://github.com/Sanket1308/Simple-Calculator/graphs/contributors)! 

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the LinkFree project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

## Run automated tests

After making changes make sure that tests passes

Start the Simple-Calculator application by previewing the project using the extension Live Server.


## All the best! 👍🏻

</br>

> If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a ⭐star! Thanks again!
