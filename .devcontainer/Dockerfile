FROM mcr.microsoft.com/devcontainers/python:3.11-bullseye

WORKDIR /

ENV CONDA_PREFIX=/azureml-envs/ai-development-env
ENV CONDA_DEFAULT_ENV=$CONDA_PREFIX
ENV PATH=$CONDA_PREFIX/bin:$PATH
ENV LD_LIBRARY_PATH=$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# needed for build_mlindex
RUN apt update && apt install -y fuse

# Install Python SDK
COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt 

# Necessary for promptflow keyring to work on Linux with dbus backend
RUN sudo apt-get update
RUN sudo apt-get install -y gcc cmake pkg-config libdbus-1-dev libglib2.0-dev
RUN pip install keyrings.alt dbus-python

# Adding this install under root's path for the custom AI Studio container solution
ENV PATH="/home/vscode/.dotnet/tools:${PATH}"

# The instructions run after this for AI CLI are required to be run by the vscode user
WORKDIR /home/vscode
USER vscode

# Install Azure AI CLI (which installs `az` CLI and `ai` CLI + dependencies)
RUN curl -sL https://aka.ms/InstallAzureAICLIDeb | bash