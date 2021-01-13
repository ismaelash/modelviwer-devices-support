

<!-- PROJECT LOGO -->
<br />

  <h3 align="center">Model Viewer Devices Support</h3>

  <p align="center">
    API Rest for get all devices with model viewer(arcore/arkit) support
    <br />
    <a href="https://youtu.be/bwI3F-bhfPo">View Demo</a>
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

Send a **GET** request for get all model and brand. <br />
Send a **POST** request with follow params: **option**(type int) and **filter**(type string and no need for option 1, 2, 3)

About option param:

**1**: Show all brand and model together <br />
**2**: Show just all brands <br />
**3**: Show just all models <br />
**4**: Get models of brand with filter (FILTER param: brand name) <br />
**5**: Return if a model is supported and show if exist similar models too (FILTER param: model name)

Body example:
```json
{
    "option": 2,
    "filter": "brand(option 4) or model(option 5)"
}
```

View how use the API via [Collection of Postman](https://github.com/ismaelash/modelviwer-devices-support/blob/main/Model%20Viewer%20Devices%20Support.postman_collection.json)
 <br />
View how use the API via [Youtube tutorial](https://youtu.be/bwI3F-bhfPo)

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
 <br />
Ismael Nascimento "Ash" - [Linkedin ](https://www.linkedin.com/in/ismaelash)

Project Link: [https://github.com/ismaelash/modelviwer-devices-support](https://github.com/ismaelash/modelviwer-devices-support)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Android Trackers ](https://github.com/androidtrackers)
* [AWS ](https://aws.amazon.com/)
* [Google ARCore ](https://developers.google.com/ar)
* [Model Viwer ](https://modelviewer.dev/)
