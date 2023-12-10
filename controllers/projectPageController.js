const Project   =   require('../models/project');
const Issue =   require('../models/issue');

module.exports.create   =   async function(request,response){
    try {
        Project.create({
            name: request.body.name,
            description: request.body.description,
            author: request.body.author
        });
        return response.redirect('back');
    } catch (error) {
        console.log('error',error);
        return response.redirect('back');
    }
}

module.exports.projectPage  =   async function(request,response){

    try {
        let project =   await Project.findById(request.params.id).populate({
            path: 'issues',
        });
        if(project){
            return response.render('projectPage',{
                title: 'Project',
                project
            });
        }
        return response.redirect('back');        
    } catch (error) {
        console.log('Error',error);
        return;
    }
}

module.exports.createIssue  =   async function(request,response){
    try {
        let project =  await Project.findById(request.params.id);
        if(project){
            let issue   =   await Issue.create({
                title: request.body.title,
                description: request.body.description,
                labels: request.body.labels,
                author: request.body.author
            });
            project.issues.push(issue);

            if(!(typeof request.body.labels === "string")){
                for(let label of request.body.labels){
                    let isPresent   =   project.labels.find((obj) => obj == label);
                    if(!isPresent){
                        project.labels.push(label);
                    }
                }
            }else{
                let isPresent   =   project.labels.find((obj) => obj == request.body.labels);
                if(!isPresent){
                    project.labels.push(request.body.labels);
                }
            }
            await project.save();
            return response.redirect('back');
        }else{
            return response.redirect('back');
        }
    } catch (error) {
        console.log('Error',error);
        return;       
    }
}