import { query } from '../db/index.js';

export async function getMembersByGroupName(groupName) {
    console.log('model',groupName)
    const response = await query(`SELECT * FROM secret_santa WHERE group_name = '$1';`, [groupName])
    console.log(response)
    return response.rows
}