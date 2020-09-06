export default (req, res) => {

    const { method } = req;

    switch (method) {

        /**
         * Get Api Ready
         */
        case 'GET':
            res.status(200).json({ message: 'Api ready to use. ' + new Date() });
            break;

        /**
         * Other
         */
        default:
            break;
    }

}