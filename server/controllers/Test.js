import { CreateError } from "../utils/Error.js";

const STATUS_400 = 400;
export const ServingMsg = (req, res) => {
    try {
        res.send('Broccolimedia is serving');
    } catch (err) {
        next(CreateError(STATUS_400, 'Broccolimedia has serve issue'))
        next(err);
    }
}