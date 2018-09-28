import db from "../models";

export default {
    create(req, res) {
        console.log(req.body);
        return db.Users.create({
            userName: req.body.userName,
            passwordHash: req.body.password,
            city: req.body.city,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            age: parseInt(req.body.age)
        }).then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    }
};