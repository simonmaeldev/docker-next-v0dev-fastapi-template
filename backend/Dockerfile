FROM python:3.12-alpine3.19

WORKDIR /app

COPY ./app /app

RUN pip install fastapi uvicorn httpx

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--reload"]