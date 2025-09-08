**Commit Message Guidelines**

To maintain a clean and consistent Git history, all commit messages must
follow this structure:

**Format:**

\<type\>(\<scope\>): \<short summary\>

- **\<type\>**: Indicates the purpose of the commit (see allowed types
  below).

- **\<scope\>**: Optional. Provides context about the part of the
  codebase affected (e.g., ui, auth, api).

- **\<short summary\>**: A concise description of the changes (in
  imperative mood).

**Rules:**

1.  **Use the format**: \<type\>(\<scope\>): \<short summary\>.

2.  **Keep the summary under 72 characters**.

3.  **Use the imperative mood** in the summary (e.g., \"Add\", \"Fix\",
    \"Update\").

4.  **Scope** is optional but recommended for clarity.

5.  **Allowed Types**:

    - feat: A new feature.

    - fix: A bug fix.

    - delete: delete a code.

    - docs: Documentation changes.

    - style: Code style changes (e.g., formatting, no functional
      change).

    - refactor: Refactoring without functional changes.

    - test: Adding or updating tests.

    - update: Maintenance tasks like updating dependencies or
      configuration.

    - wip: Work in progress.

**Examples:**

**✅ Valid Commit Messages:**

- **Feature Addition**:

> feat(auth): add user login functionality
>
> Adds the ability for users to log in through the authentication
> module.

- **Bug Fix**:

> fix(api): resolve timeout issue in data fetch
>
> Fixes a timeout issue that occurred when fetching data from the API.

- **Documentation**:

> docs(readme): update installation instructions
>
> Updates the README file with improved setup and installation steps.

- **Styling**:

> style(ui): format header component with Prettier
>
> Applies consistent code formatting to the header component.

- **Refactoring**:

> refactor(api): optimize data fetching logic
>
> Refactors the API data fetching logic to improve performance.

- **Tests**:

> test(auth): add unit tests for login endpoint
>
> Adds unit tests to ensure the login endpoint works as expected.

- **update**:

> update(deps): update eslint to latest version
>
> Updates the ESLint dependency to its latest version.

**Common Mistakes:**

**❌ Invalid Commit Messages:**

- **Missing Type**:

> add login functionality
>
> No type is provided.

- **Not in Imperative Mood**:

> Added login functionality
>
> Use \"Add\" instead of \"Added.\"

- **Too Long Summary**:

> feat(auth): add the ability for users to log in using their email and
> password by implementing a new authentication module in the backend
>
> The summary exceeds 72 characters.

By following these guidelines, we can maintain a clean and meaningful
Git history that makes it easy for everyone to understand what has
changed and why.
