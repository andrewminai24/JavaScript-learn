//async await helps to make promises more 
//readable and cleaner

async function getRecipes(){
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await get related('Jonas Minai');
    console.log(related);

    return recipe;
}

getRecipes().then(result => console.log(`${result} is the best `));
console.log(rec);
//async always returns a promise so it resolves when returning
//EVENT LOOP is to look at the stack and event que
//Sees what is empty 
//pushes whatever is on the task que to the stack