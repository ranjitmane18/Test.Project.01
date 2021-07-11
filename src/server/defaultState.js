export const defaultState = {
    users : [
        {
            id :"U1",
            name : "Dev"
        },
        {
            id : "U2",
            name : "Batista"
        }
    ],
    groups : [
        {
            name : "To Do",
            id : "G1",
            owner : "U1"
        },
        {
            name : "Doing",
            id : "G2",
            owner : "U1"
        },
        {
            name : "Done",
            id : "G3",
            owner : "U1"
        }
    ],
    tasks : [
        {
            name : "testing",
            id : "T1",
            group : "G1",
            owner : "U1",
            isComplete : false
        },
        {
            name : "Implementing",
            id : "T2",
            group : "G2",
            owner : "U1",
            isComplete : false
        },
        {
            name : "Analysis",
            id : "T3",
            group : "G3",
            owner : "U1",
            isComplete : true
        }
    ],
    comments : [
        {
            owner : "U1",
            id : "C1",
            tasks : "T1",
            content : "Good job !!"
        }
    ]
}