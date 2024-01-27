# Deconstructing Contoso Chat
Want to build a production LLM Application with a Retrieval Augmented Generation architecture - but not sure where to start? Let's deconstruct contoso-chat to learn how we can do this with Azure AI Studio and Prompt Flow


## 1. Development Environment

### 1.1 Python Packages

These are installed via the `requirements.txt` file. The following list is a combination of packages identified from the Azure AI Studio samples (using Azure AI SDK and CLI) and the Contoso Chat sample (using Prompt Flow and Azure AI Studio). Some packages (e.g., mkdocs, ipykernel) are added to support relevant tools like Jupyter Notebooks (code) and MKDocs Material (documentation).

| Package | Description |
|:---|:---|
| ipykernel | |
| pytest | |
| keyrings-alt | |
| mkdocs-material | |
||  **AZURE-SPECIFIC**  |
| azure-identity| |
| azure-cosmos| |
| azure-ai-generative| |
| azureml-mlflow| |
| azure-ai-ml| |
| azure-search-documents| |
| promptflow| |
| promptflow-tools| |
| | |

### 1.2 Docker Container

We can [configure prebuilds](https://docs.github.com/en/codespaces/prebuilding-your-codespaces/configuring-prebuilds) later to speed up the Docker container setup time.
