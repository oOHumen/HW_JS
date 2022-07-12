const enterprises = [{
        id: 1,
        name: "Предприятие 1",
        departments: [{
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [{
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [{
            id: 10,
            name: "Отдел аналитики",
            employees_count: 0,
        }, ]
    }
]


//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

/*
function getEnterpriseName(factories) {
    factories.forEach(factory => {
        let sections = [];
        let count = 0;
        sections.push(factory.name);
        if (factory.departments) {
            factory.departments.forEach((section) => {
                count = count + Number(section.employees_count);
                if (section.employees_count) {
                    sections.push(`- ${section.name} (${section.employees_count} сотрудников)`);
                } else sections.push(`- ${section.name} (нет сотрудников)`);
            });
            if (count) {
                sections[0] = sections[0] + `(${count} сотрудников)`;
            } else {
                sections[0] = sections[0] + ` нет сотрудников`
            };
        }
        console.log(sections.join(`\n\ `));
    });
}

getEnterpriseName(enterprises);
*/

//   **Пример:**

//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

//   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

/*
function getEnterpriseName(depId) {
    enterprises.forEach((el) => {
        el.departments.forEach((element) => {
            if (element.id === depId || element.name === depId) {
                console.log(el.name);
            }
        })
        if (el.id === depId || el.name === depId) {
            console.log(el.name);
        }
    });
}


getEnterpriseName(8);
*/

//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2

//   3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

//Help function that ged ID to the new object:
const getMaxID = (enterprise) => {
    let maxId = 0;
    enterprise.forEach((enterid) => {
        if (maxId < enterid.id) {
            maxId = enterid.id;
        }
        enterid.departments.forEach((depId) => {
            if (maxId < depId.id) {
                maxId = depId.id;
            }
        })
    })
    return maxId + 1;
}


// function addEnterprise(enterprise) {
//     const obj = new Object;
//     obj.id = getMaxID(enterprises);
//     obj.name = enterprise;
//     obj.departments = [];
//     enterprises.push(obj);

// }

// addEnterprise("Предприятие 4");
// console.log(enterprises);


//   Пример:
//   addEnterprise("Название нового предприятия")

//   4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

/*
function addDepartment(companyId, depName) {
    const newDep = {
        id: getMaxID(enterprises), //функция взята со строки 123-136
        name: depName,
        employees_count: 0
    };

    enterprises.forEach((el) => {
        if (el.id === companyId) {
            el.departments.push(newDep);
            console.log(`the department added to company with ID ${companyId}`);
        }
    })

}
addDepartment(11, "bitches department");
console.log(enterprises);
console.log(enterprises[3]);
*/

//   Пример:
//   addDepartment(1, "Название нового отдела")

//   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// const editEnterprise = function (enterprId, newEntrprName) {
//     enterprises.find((el) => {
//         if (el.id === enterprId) {
//             el.name = newEntrprName;
//         }
//     })
// }


//   Пример:
// editEnterprise(1, "Новое название предприятия");
// console.log(enterprises);


//   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// const editDepartment = function (depId, newDepName) {
//     enterprises.forEach((element) => {
//         element.departments.forEach((el) => {
//             if (el.id === depId) {
//                 el.name = newDepName;
//                 console.log(element.departments); //проверка для отображения департаментов в консоли
//             }
//         })
//     })
// }

//   Пример:
// editDepartment(7, "Новое название отдела")


//   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// const deleteEnterprise = (enterpriseId) => {
//     let newArr = enterprises.filter((el) => {
//         return (el.id !== enterpriseId)
//     })
//     console.log(newArr);
// }

// //   Пример:
// deleteEnterprise(9)




//   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// const deleteDepartment = (departmentId) => {
//     enterprises.forEach((elem) => {
//         let indexOfDeptsId = elem.departments.findIndex(el => el.id === departmentId && el.employees_count === 0);
//         if (indexOfDeptsId !== -1) {
//             elem.departments.splice(indexOfDeptsId, 1);
//         } //else throw new Error("wrong dep ID");
//     })
// }

//   Пример:
// deleteDepartment(10)
// console.log(enterprises[2]);


//   9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// const moveEmployees = (depIdFrom, depIdTo) => {
//     enterprises.forEach((el) => {
//         el.departments.forEach((depFrom) => {
//             if (depFrom.id === depIdFrom) {
//                 let count = depFrom.employees_count;
//                 depFrom.employees_count = 0;
//                 el.departments.forEach((depTo) => {
//                     if (depTo.id === depIdTo) {
//                         depTo.employees_count += count;
//                     }
//                 })
//             }
//         })
//     })
// }

//   Пример:
// moveEmployees(6, 8)
// console.log(enterprises[1]);