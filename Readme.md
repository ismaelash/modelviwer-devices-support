

<!-- PROJECT LOGO -->
<br />

  <h3 align="center">Model Viewer Devices Support</h3>

  <p align="center">
    API Rest for get all devices with model viewer(arcore/arkit) support
    <br />
    <a href="https://www.youtube.com/c/IsmaelNascimentoAsh/videos">View Demo</a>
    ·
    <a href="https://github.com/ismaelash/modelviwer-devices-support/issues">Report Bug</a>
    ·
    <a href="https://github.com/ismaelash/modelviwer-devices-support/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## About The Project

API Rest for get all devices with model viewer(arcore/arkit) support

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Node,js](https://nodejs.org/en/)
* [Axios](https://github.com/axios/axios)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [AWS API Gateway](https://aws.amazon.com/api-gateway/)
* [Tracking Google ARCore Devices](https://github.com/ismaelash/arcore-devices)

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```
* axios
  ```sh
  npm install axios
  ```

<!-- USAGE EXAMPLES -->
## Usage

API URL: <br> https://2jx1tn6oh0.execute-api.us-east-1.amazonaws.com/dev/modelviwer-devices-support

Methods:
* GET
* POST

Send a **GET** request for get all model and brand.
Send a **POST** request with follow params: **option**(type int) and **filter**(type string and no need for option 1, 2, 3)

About option param:

**1**: Show all brand and model together
**2**: Show just all brands
**3**: Show just all models
**4**: Get models of brand with filter (FILTER param: brand name)
**5**: Return if a model is supported and show if exist similar models too (FILTER param: model name)

Body example:
{
    "option": 2,
    "filter": "brand(option 4) or model(option 5)"
}

View how use the API via [Collection of Postman](https://nodejs.org/en/)
View how use the API via [Youtube tutorial](https://nodejs.org/en/)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ismael Nascimento "Ash" - [@_ismaelash ](https://twitter.com/_ismaelash) - contato@ismaelnascimento.com

Project Link: [https://github.com/ismaelash/modelviwer-devices-support](https://github.com/ismaelash/modelviwer-devices-support)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Android Trackers ](https://github.com/androidtrackers)
* [AWS ](https://aws.amazon.com/)
* [Google ARCore ](https://developers.google.com/ar)
* [Model Viwer ](https://modelviewer.dev/)
