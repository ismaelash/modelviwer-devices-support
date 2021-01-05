const axios = require('axios');
const URL = "https://raw.githubusercontent.com/ismaelash/arcore-devices/master/devices.csv";

exports.handler = async (event) => {
    let payload = null;
    let axiosData = await axios.get(URL);

    switch (event.option) {
        case 1:
            payload = processDataOption1(axiosData.data);
            return payload;
        case 2:
            payload = processDataOption2(axiosData.data);
            return payload;
        case 3:
            payload = processDataOption3(axiosData.data);
            return payload;
        case 4:
            payload = processDataOption4(axiosData.data, event.filter);
            return payload;
        case 5:
            payload = processDataOption5(axiosData.data, event.filter);
            return payload;
        default:
            payload = processDataOption1(axiosData.data);
            return payload;
    }
};

const processDataOption1 = (csv) => {
    let arrayOfLines = csv.match(/[^\r\n]+/g);
    let dict = [];

    arrayOfLines.forEach(line => {

        let brandCurrent = line.split(";")[0];
        let modelCurrent = line.split(";")[1];

        dict.push({
            key: brandCurrent,
            value: modelCurrent
        });

    })
    // console.log(dict.splice(1));

    return dict.splice(1);
}

const processDataOption2 = (csv) => {
    let arrayOfLines = csv.match(/[^\r\n]+/g);
    let dict = [];

    arrayOfLines.forEach(line => {

        let brandCurrent = line.split(";")[0];
        let modelCurrent = line.split(";")[1];

        dict.push({
            key: brandCurrent,
            value: modelCurrent
        });

    })

    let printerTemp = "";
    let brandsArray = [];
    for (var key in dict) {
        var value = dict[key];
        var model = value.key;

        if (!printerTemp.includes(model))
            brandsArray.push(model);

        printerTemp = model;
    }
    // console.log(brandsArray.splice(1));

    return brandsArray.splice(1);
}

const processDataOption3 = (csv) => {
    let arrayOfLines = csv.match(/[^\r\n]+/g);
    let dict = [];

    arrayOfLines.forEach(line => {

        let brandCurrent = line.split(";")[0];
        let modelCurrent = line.split(";")[1];

        dict.push({
            key: brandCurrent,
            value: modelCurrent
        });

    })

    let modelsArray = [];
    for (var key in dict) {
        var value = dict[key];
        modelsArray.push(value.value);
        console.log(value.value);
    }
    // console.log(modelsArray.splice(1));

    return modelsArray.splice(1);
}

const processDataOption4 = (csv, filter) => {
    let arrayOfLines = csv.match(/[^\r\n]+/g);
    let dict = [];

    arrayOfLines.forEach(line => {

        let brandCurrent = line.split(";")[0];
        let modelCurrent = line.split(";")[1];

        dict.push({
            key: brandCurrent,
            value: modelCurrent
        });

    })

    let resultModels = [];
    for (var key in dict) {
        var value = dict[key];

        if (value.key.toLowerCase() === filter.toLowerCase())
            resultModels.push(value.value);
    }
    // console.log(resultModels);

    return resultModels;
}

const processDataOption5 = (csv, filter) => {
    let arrayOfLines = csv.match(/[^\r\n]+/g);
    let dict = [];

    arrayOfLines.forEach(line => {

        let brandCurrent = line.split(";")[0];
        let modelCurrent = line.split(";")[1];

        dict.push({
            key: brandCurrent,
            value: modelCurrent
        });

    })

    let hasModel = false;
    let similarModels = [];

    for (var key in dict) {
        var value = dict[key];

        if (value.value.toLowerCase().includes(filter.toLowerCase())) {
            hasModel = true;
            similarModels.push(value.value);
        }
    }
    // console.log({ result: hasModel, others: similarModels });

    return { result: hasModel, similarModels: similarModels };
}