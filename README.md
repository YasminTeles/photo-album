# Photo Album

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purpose.

There are two ways to get started:

<details>
<summary>Get started with local Node;</summary>

### Prerequisites

- [Node](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. You need the version 14.

### Installation

1. Clone this repository;

2. Run the following commands:

```Makefile
cd photo-album
make setup
make run
```

### Running tests

```Makefile
make test
```

</details>

<details>
<summary>Get started with Docker;</summary>

### Prerequisites

- [Docker](https://www.docker.com/) - is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

### Installation

1. Clone this repository;

2. Run the following commands:

```Makefile
cd photo-album
make docker-build
make docker-run
```

3. For kill container's Docker, run the following command:

```Makefile
make docker-kill
```

</details>

## Contribute Us

Contributions are what make the open source community such an amazing place to learn, inspire, and create.
Any contributions you make are greatly appreciated. See [contribute policy](CONTRIBUTE.md).

## License

This project is licensed under the [MIT License](LICENSE).
