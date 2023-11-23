import UsageRecord from "../models/usage-record-model.js";

export const saveUsageRecord = async (usageRecord) => {
    try {
        const newUsageRecord = new UsageRecord(usageRecord);
        await newUsageRecord.save();
        return newUsageRecord;
    } catch (error) {
        console.error(error);
        throw error
    }
}