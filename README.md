# 🔐 Password Generator

## Overview
A robust and customizable password generator web application that allows users to create strong, secure passwords with various customization options.

## Features

### Password Customization
- Adjustable password length (1-30 characters)
- Option to include/exclude:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Symbols
  - Duplicate characters
  - Spaces

### Key Functionalities
- Dynamic password generation
- Real-time password strength indicator
- One-click password copy
- Instant visual feedback on password length and complexity

## Technical Implementation

### Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Google Material Symbols for icons

### Core Functions
- `generatePassword()`: Dynamically creates passwords based on user selections
- `updatePassIndicator()`: Provides visual strength feedback
- `copyPassword()`: Copies generated password to clipboard with visual confirmation

## Password Strength Levels
- 🟢 Weak: 1-8 characters
- 🟡 Medium: 9-16 characters
- 🔴 Strong: 17+ characters

## Usage Instructions
1. Adjust password length using the slider
2. Select desired character types
3. Click "Generate Password"
4. Copy password with one click
