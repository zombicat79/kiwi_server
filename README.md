# KiwiPhone 3000 - Server side

## Description

This is the back end side of an app developed as part of a tech challenge posed during a recruitment process.  It receives a numeric input from a mocked mobile phone, and returns it processed as possible words intended for composing a message.

The main goal of the challenge was to mimic the so-called T9 or predictive text technology that boasted the most state-of-the-art models of the time, by which the phone could infer the word intented by the user just with a few button taps. 

## Technologies

- Base language: JavaScript

- Back end libraries & frameworks: Express.js, Axios (HTTP requests), Jasmine (Unit testing)

- External APIs: Free Dictionary API (https://dictionaryapi.dev)

  

## Features

- **Front end input reception and processing:** The server receives input from the front end, consisting of a series of numbers resulting of the user interaction with a phone keypad. Numbers are then decoded into distinct groups of letters using a dictionary, and all the letters obtained get combined by means of an algorithm that aims to obtain all the potential letter combinations triggered by the numeric sequence.

- **Connection with a dictionary API:** After decoding the numeric sequence coming as input, the server connects with an external dictionary API and compares all possible letter combinations with entries in the dictionary. 

- **Return of processed information:** Dictionary entries matching the obtained letter combinations get sent back to the front end for display.

- **Storage and manegement of a side customized dictionary:** The server receives words specially marked as preferred by the user and stores them in an array for quicker access. 

  

## Server routes

| **Method** | **Route**           | **Description**                                              | Request - Body         |
| ---------- | ------------------- | ------------------------------------------------------------ | ---------------------- |
| `GET`      | `/:input`           | Sends numeric input to the server and gets back a relevant word. | numeric keypad input   |
| `POST`     | `/:word`            | Sends a word marked as preferred to the server, for storage and quick access purposes. | favorite word (string) |
| `GET`      | `/favorites/:input` | Sends the lenght of the keypad input in order to obtain a stored favorite word according to that length. | numeric keypad input   |

## Instructions

### Getting started:

```
$ git clone https://github.com/zombicat79/kiwi_server.git
$ npm run start:dev
```

The server will start running on http://localhost:5000/

### Performance warning:

Due to the amount of back and forth requests triggered by the decoding algorithm, the server will only cope with words comprised of up to 6 letters.

