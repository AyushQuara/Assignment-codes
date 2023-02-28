const Student = require('./studentModel')



async function createStudent(req, res) {
    try {
        const { name, age, gender} = req.body;

        const student = await Student.create({
            name,
            age,
            gender,
        });

        res.status(201).json(student);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: 'server error'});
    }
}

module.exports = {createStudent};

async function updateStudent(req, res) {
    try {
        const {rollNumber, name, date} = req.body;
        const [rowsUpdated, [updatedStudent]] = await Student.update(
            {date},
            {
                where: {
                    [rollNumber ? 'rollNumber' : 'name']: rollNumber || name,
                },
                returning: true,
            }
        );
        if (rowsUpdated === 0) {
            return res.status(404).json({message: 'Student not found'});
        }

        res.status(200).json(updatedStudent);
    }catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}
module.exports = { createStudent, updateStudent};

async function getStudents(req, res) {
    try {
        const students = await Student.findAll();

        res.status(200).json(students);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
}
module.exports = { createStudent, updateStudent, getStudents};