const updateAll = "UPDATE user_details SET user_first_name=$1, user_middle_name=$2, user_last_name=$3, user_gender=$4, user_city=$5, user_state=$6, user_country=$7, user_mobile_number=$8 WHERE user_id=$9";
const insertAll = "INSERT INTO user_details (user_first_name, user_middle_name, user_last_name, user_gender, user_city, user_state, user_country, user_mobile_number, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
const userExist = "SELECT user_id FROM user_details WHERE user_id=$1";
const getUserDetails = "SELECT * FROM user_details WHERE user_id=$1";

module.exports = {
    updateAll,
    insertAll,
    userExist,
    getUserDetails,
}