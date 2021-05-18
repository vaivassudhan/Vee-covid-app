export default class API_Base {

    static dummy = '';

    //Development UAT
    static Environment = "UAT";
    static API_Base_URL = "https://uatapihomequarantine.vee-services.com/api/";
    static API_Public_URL = "https://uatapihomequarantine.vee-services.com/api/";
    static ApiTimeOut = 20000; // sec

    // static Environment = "Local";
    // static API_Base_URL = "http://172.18.1.88:402/api/";
    // static API_Public_URL = 'http://172.18.1.88:402/api/';
    // static ApiTimeOut = 20000; // sec

    //Live
    // static Environment = "Live";
    // static API_Base_URL = "https://apilcs.vee-services.com/api/";
    // static API_Public_URL = "https://apilcs.vee-services.com/api/";
    // static ApiTimeOut = 20000; // sec

    //ForgotPassword URL
    static GETCATEGORY = 'v1/getCategoryList';
    static GETPRESCRIPTIONLIST = 'v1/GetPrescriptionList?';

    //Fixed Image Properties
    static MaxWidth = 800;
    static MaxHeight = 600;
    static Quality = 100;
    static MaxImageSize = 25000000; //Byte


    //Bucket Details Production
    static BUCKETNAME = "prodanadhanam";
    static REGION = "ap-south-1";
    static ACCESS_KEY = "AKIAU3B6YW7QWH5UGFCM";
    static SECRET_KEY = "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";
    static AWSUrl = "https://332991608801.signin.aws.amazon.com/console";

}

