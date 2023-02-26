const student = {
    name: 'Kalim Uddin',
    age: 15,
    class: 'ten',
    mark: {
        math: 56,
        physics: 89,
        chemistry:65,
    }
    
}
const marks = student.mark;
const math = student.mark.math;
const chemistry = student['mark']['chemistry'];
const subject = 'math';
const subjectMarks = student.mark[subject]
const mark3 = student.mark[subject];
console.log(mark3);