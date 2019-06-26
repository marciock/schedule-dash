const Schedule=require('../controllers/schedulelist')

const recordSearch=(record)=>{
    let results;
    switch (record.status) {
        case 'find':
            results=JSON.stringify(Schedule.find);
                console.log(`no record - ${results}`)
            break;
    
        default:
            break;
    }
    return results;
}

module.exports=recordSearch;