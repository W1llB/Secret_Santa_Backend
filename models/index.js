import { query } from '../db/index.js';

export async function getMembersByGroupName(groupName) {
    console.log('model',groupName)
    const response = await query(`SELECT * FROM secret_santa WHERE group_name = $1;`, [groupName])
    return response.rows
}

export async function addGroup(membersArray) {
    console.log('model',membersArray)
    for(let member of membersArray){
        const {groupName, deadline, budget, memberName, giftingTo} = member
        const response = await query(`INSERT into secret_santa (group_name, deadline, Budget, member_name, gifting_to) VALUES ($1, $2,$3, $4, $5) RETURNING *;`, [groupName, deadline, budget, memberName, giftingTo])
    }
    const response = await query(`SELECT * FROM secret_santa WHERE group_name = $1;`, [membersArray[0].groupName])
    return response.rows
}