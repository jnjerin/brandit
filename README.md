

# Brandit: Next-Gen Branding Solution

## Project Overview

Brandit is a branding solution that leverages modern web technologies and cloud-native architecture to deliver a powerful, scalable, and efficient branding experience. This project demonstrates proficiency in full-stack development, cloud computing, and AI integration.It combines a Next.js frontend with a serverless backend powered by AWS CDK and Lambda. 

## Key Technologies

- **Frontend**: Next.js 13+ with Typescript (React)
- **Backend**: Python3
- **Infrastructure as Code**: AWS CDK (written in TypeScript)
- **API**: Python FASTAPI and AWS API Gateway
- **AI Integration**: OpenAI API

## Architecture Highlights

1. **Serverless Architecture**: Utilizing AWS Lambda for cost-effective, scalable backend operations.
2. **Infrastructure as Code**: Employing AWS CDK for reproducible and version-controlled infrastructure.
3. **Modern Frontend**: Leveraging Next.js for server-side rendering, optimized performance, and excellent developer experience.
4. **AI-Powered Branding**: Integrating OpenAI's API for intelligent branding suggestions and analysis.

## Project Structure

- `brandit-site/`: Next.js frontend application
- `brandit-infrastructure/`: AWS CDK code for infrastructure setup
- `app/`: Python backend code with FastAPI

## Component Breakdown

### Frontend (brandit-site)

The frontend is built using Next.js, a powerful React framework for building modern web applications. Key features include:

- Next.js 13+ with the new `app` directory structure  for improved routing and layouts
- Optimized font loading using `next/font`
- Easy deployment to Vercel or other hosting platforms

To run the frontend locally:

```bash
cd brandit-site
npm i
npm run dev
```

Access the application at [http://localhost:3000](http://localhost:3000).

### Backend (app)

The backend logic is implemented in Python and deployed as a Lambda function. The main handler is located in `brandkit_api.py`.

The backend is implemented as an AWS Lambda function using Python 3.9:
- Main handler located in `brandkit_api.py`
- Integrates with OpenAI's API using the `OPENAI_API_KEY` environment variable
- Designed to handle API requests through API Gateway

## Backend Infrastructure (brandit-infrastructure)

The AWS infrastructure is defined using AWS CDK with TypeScript. 

The file ```brandit-infrastructure/lib/brandit-infrastructure-stack.ts```  sets up the following AWS resources:
- Lambda Layer (`BaseLayer`) from `lambda_base_layer/layer.zip` for shared code or dependencies
- Lambda function (`ApiFunction`) using Python 3.9 runtime and including the `BaseLayer`
- API Gateway (`RestApi`) named "Brandit API" integrated with the Lambda function and a proxy integration to the Lambda function
- Lambda function code sourced from the `../app/` directory
- Environment variables, specifically `OPENAI_API_KEY`

*This setup demonstrates a serverless architecture that's scalable and easy to maintain, with infrastructure as code for version control and reproducibility.*

To deploy the infrastructure:

```bash
cd brandit-infrastructure
npm run build
npx cdk deploy
```


## Environment Variables

The application uses the following environment variable:

- `OPENAI_API_KEY`: Required for integrating with OpenAI services


## Standout Features

1. **Full-Stack Expertise**: Demonstrates proficiency in both frontend (Next.js/React) and backend (Python/AWS) technologies.
2. **Cloud-Native Design**: Showcases understanding of modern cloud architecture principles and best practices.
3. **AI Integration**: Highlights ability to work with cutting-edge AI technologies for practical applications.
4. **DevOps Practices**: Implements infrastructure as code, showing DevOps and cloud engineering skills.
5. **Scalability**: Designed to handle growth with serverless architecture and cloud services.


