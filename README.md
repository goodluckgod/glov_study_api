# Serverless API for LLM Chatbot

#### This API using Google Cloud Functions for Serverless Functions and OpenAI API for LLM Model.

## Run Locally

Clone the project

```bash
  git clone https://github.com/goodluckgod/serverless_chatbot_study.git
```

Go to the project directory

```bash
  cd serverless_chatbot_study
```

Install dependencies

```bash
  npm install
```

Start the server with

```bash
  npm run start
```

If you want hot-reload you can use dev command.

```bash
  npm run dev
```

## Deployment

To deploy this project firstly you should setup [Google Cloud CLI](https://cloud.google.com/sdk/docs/install), after that you can run deploy command.

Please check Environment Variables section before deploying.

```bash
  npm run deploy
```

## API Reference

#### Chat with LLM model

```http
  GET /llm-chat
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `message` | `string` | **Required**. Message from user |

#### Provide feedback

```http
  GET /feedback-provide_feedback
```

| Parameter    | Type      | Description                                                     |
| :----------- | :-------- | :-------------------------------------------------------------- |
| `isPositive` | `boolean` | **Required**. Is user feedback postively to response of Chatbot |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Variable         | Description                                                                                                                                      |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `RUNTIME`        | Runtime environment for Node.js. Check this [link](https://cloud.google.com/functions/docs/concepts/execution-environment) for more information. |
| `GCP_REGION`     | Google Cloud Region                                                                                                                              |
| `OPENAI_API_KEY` | API Key of your OpenAI Account.                                                                                                                  |
