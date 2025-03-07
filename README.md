# Scribe-it

[![React](https://img.shields.io/badge/React-18.2.0-whitesmoke?style=flat&logo=react&logoColor=white&logoSize=auto&labelColor=blue)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.x-blue?style=flat&logo=tailwindcss&logoColor=blue&logoSize=auto&labelColor=black)](https://tailwindcss.com/)
[![Xenova](https://img.shields.io/badge/Xenova-whisper--tiny.en-purple?style=flat&logoSize=auto&labelColor=white)](https://www.npmjs.com/package/@xenova/transformers)
[![Xenova](https://img.shields.io/badge/Xenova-nllb--200--distilled--600M-wheat?style=flat&logoSize=auto&labelColor=white)](https://www.npmjs.com/package/@xenova/transformers)

Deployed: soon!

## Audio Transcription and Translation App

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Usage](#usage)
   - [Recording Audio](#recording-audio)
   - [Uploading Audio Files](#uploading-audio-files)
   - [Transcription](#transcription)
   - [Translation](#translation)
4. [Technologies Used](#technologies-used)
5. [Machine Learning Model Details](#machine-learning-model-details)
   - [Transcription Model](#transcription-model)
   - [Translation Model](#translation-model)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

Scribe-it is a robust React-based web application that utilizes machine learning for audio transcription and translation. With its intuitive interface, users can efficiently manage, edit, and translate transcriptions, making it an invaluable tool for content creators, journalists, and language enthusiasts.

## Features  

- **In-App Audio Recording**: Capture audio directly within the application.  
- **Audio File Upload**: Upload audio files for seamless transcription.  
- **AI-Powered Transcription**: Convert speech to text using advanced machine learning models.  
- **Automated Translation**: Translate transcriptions into multiple languages with ML-driven accuracy.  
- **Intuitive Interface**: Effortlessly copy, edit, and download transcriptions and translations.  
- **Multi-Language Compatibility**: Support for transcription and translation across various languages.

## Usage

### Recording Audio

1. Open the app and navigate to the home page.
2. Click on the "Record" button to start recording audio.
3. Click "Stop" to end the recording.
4. The recorded audio will be ready for transcription.

### Uploading Audio Files

1. Click on the "Upload" button.
2. Select an audio file from your device.
3. The uploaded audio file will be ready for transcription.

### Transcription

1. After recording or uploading an audio file, click "Transcribe".
2. The app will process the audio and display the transcribed text.

### Translation

1. Navigate to the "Translation" tab.
2. Select the target language from the dropdown menu.
3. Click "Translate" to translate the transcribed text.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Web Workers**: For running transcription and translation tasks in the background.
- **TailwindCSS**: For styling the application.
- **Machine Learning Models**:
  - **Transcription**: Uses the [`Xenova/whisper-tiny.en`](https://www.npmjs.com/package/@xenova/transformers) model from the `@xenova/transformers` library for automatic speech recognition.
  - **Translation**: Utilizes the [`Xenova/nllb-200-distilled-600M`](https://www.npmjs.com/package/@xenova/transformers) model from the `@xenova/transformers` library for multilingual translation.
- **@xenova/transformers**: A library that provides easy-to-use implementations of state-of-the-art transformer models.

## Machine Learning Model Details

### Transcription Model

- **Task**: Automatic Speech Recognition (ASR)
- **Model**: `Xenova/whisper-tiny.en`
- **Features**:
  - Optimized for English language transcription
  - Supports chunk-based processing for long audio files
  - Provides timestamps for transcribed text

### Translation Model

- **Task**: Translation
- **Model**: `Xenova/nllb-200-distilled-600M`
- **Features**:
  - Supports translation between multiple languages
  - Uses the NLLB (No Language Left Behind) architecture
  - Distilled version for improved performance

Both models are implemented using Web Workers to ensure smooth performance and prevent blocking the main thread during processing.
