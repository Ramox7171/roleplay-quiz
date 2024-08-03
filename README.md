# Quiz App

Quiz App is an interactive quiz application built with React. It was created to verify the knowledge of players on the The Hood Roleplay server, but you can integrate any question source you like.
![image](https://github.com/user-attachments/assets/ef79747d-9e39-439f-bf9e-c7b75fd28876)


## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the app in action [here](https://hood-quiz.vercel.app/)).

## Features

- Display quiz questions.
- Answer questions interactively.
- The list of answers to choose from is shuffled.
- Each question has a CSS-animated timer showing the time to answer.
- Upon selection, the answer is highlighted, and after a brief delay, like in "Who Wants to Be a Millionaire", the player finds out if their answer was correct.
- Track correct, incorrect, and skipped answers.
- Summarize results at the end of the quiz with a detailed summary and a list of answers indicating whether they were correct or not.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/YourUsername/quiz-app.git
    cd quiz-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

## Usage

After starting the application, you can navigate through the quiz questions by selecting answers. At the end of the quiz, you will see a summary of your results.

## File Structure

- `App.jsx`: Main application component.
- `components/`
  - `Header.jsx`: Header component.
  - `Quiz.jsx`: Component containing quiz logic.
  - `Question.jsx`: Component for individual questions.
  - `Answers.jsx`: Component for answers to a question.
  - `QTimer.jsx`: Timer component for questions.
  - `Summary.jsx`: Component summarizing the results.
- `questions.js`: File containing quiz questions.
- `assets/`: Folder with assets, e.g., images.

## Contributing

All suggestions, bug reports, and pull requests are welcome. To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

## License

This project is licensed under the MIT License.
