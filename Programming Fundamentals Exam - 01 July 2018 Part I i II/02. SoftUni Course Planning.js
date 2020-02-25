function softUniCoursePlaning(input) {
    let initialCours = input.shift().split(', ');

    while ((line = input.shift()) !== 'course start') {
        if (line.includes('Add')) {
            let lessonTitle = line.split(':')[1];
            if (!initialCours.includes(lessonTitle)) {
                initialCours.push(lessonTitle);
            }
        } else if (line.includes('Insert')) {
            let lessonTitle = line.split(':')[1];
            let index = line.split(':')[2];
            if (!initialCours.includes(lessonTitle)) {
                initialCours.splice(index, 0, lessonTitle);
            }
        } else if (line.includes('Remove')) {
            let lessonTitle = line.split(':')[1];
            if (initialCours.includes(lessonTitle)) {
                initialCours.splice(initialCours.indexOf(lessonTitle), 1);
            }
            for (let el of initialCours) {
                if (el.split('-')[0] === lessonTitle) {
                    initialCours.splice(initialCours.indexOf(el), 1);
                    break;
                }
            }
        } else if (line.includes('Swap')) {
            let lessonTitle1 = line.split(':')[1];
            let lessonTitle2 = line.split(':')[2];
            let exerciseTitle1 = lessonTitle1 + '-Exercise';
            let exerciseTitle2 = lessonTitle2 + '-Exercise';
            let indexlesson1 = 0;
            let indexlesson2 = 0
            if (initialCours.includes(lessonTitle1) && initialCours.includes(lessonTitle2)) {
                indexlesson1 = initialCours.indexOf(lessonTitle1);
                indexlesson2 = initialCours.indexOf(lessonTitle2);
                initialCours[indexlesson1] = lessonTitle2;
                initialCours[indexlesson2] = lessonTitle1;
            }
            if (initialCours.includes(exerciseTitle1) && initialCours.includes(exerciseTitle2)) {
                let indexExercise1 = initialCours.indexOf(exerciseTitle1);
                let indexExercise2 = initialCours.indexOf(exerciseTitle2);
                initialCours[indexExercise1] = exerciseTitle2;
                initialCours[indexExercise2] = exerciseTitle1;
            } else {
                if (initialCours.includes(exerciseTitle1)) {
                    let indexExercise1 = initialCours.indexOf(exerciseTitle1);
                    initialCours.splice(indexExercise1, 1);
                    initialCours.splice(initialCours.indexOf(lessonTitle1) + 1, 0, exerciseTitle1);
                }
                if (initialCours.includes(exerciseTitle2)) {
                    let indexExercise2 = initialCours.indexOf(exerciseTitle2);
                    initialCours.splice(indexExercise2, 1);
                    initialCours.splice(initialCours.indexOf(lessonTitle2) + 1, 0, exerciseTitle2);
                }
            }
        } else if (line.includes('Exercise')) {
            let lessonTitle = line.split(':')[1];
            let exerciseTitle = `${lessonTitle}-Exercise`;
            if (initialCours.includes(lessonTitle)) {
                let indexLessonTitle = initialCours.indexOf(lessonTitle)
                if (!initialCours.includes(exerciseTitle)) {
                    initialCours.splice(indexLessonTitle + 1, 0, exerciseTitle);
                }
            } else {
                initialCours.push(lessonTitle);
                initialCours.push(exerciseTitle);
            }
        }
    }
    initialCours.forEach((el, index) => {
        console.log(`${index+1}.${el}`);
    });
}
softUniCoursePlaning(['Data Types, Objects, Lists',
    'Add:Databases',
    'Insert:Arrays:0',
    'Remove:Lists',
    'course start'
]);
softUniCoursePlaning(['Arrays, Lists, Methods',
    'Swap:Arrays:Methods',
    'Exercise:Databases',
    'Swap:Lists:Databases',
    'Insert:Arrays:0',
    'course start'
]);