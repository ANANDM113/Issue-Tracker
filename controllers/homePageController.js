const Project   =   require('../models/project');

module.exports.home =   async function(request,response){
    
    try {
        let projects    =   await Project.find({});
        return response.render('homePage.ejs',{
            title: 'Issue Tracker',
            projects   
        });
    } catch (error) {
        console.log(error);
        return;
    }
}