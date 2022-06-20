import mongoose from "mongoose";
const RankSchema = new mongoose.Schema({
    // {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    // all time rank
    currank: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    lastmonthrank: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    lastyearrank: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
});

export default mongoose.model("Rank", RankSchema);
