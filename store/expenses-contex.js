import { createContext, useReducer } from "react";

const DUMMY_EXPENSES=[
    {
        id:'e1',
        description:'A pair of shoes',
        amount:58.99,
        date: new Date('2023-04-02')
    },
    {
        id:'e2',
        description:'A pair of trousers',
        amount:89.99,
        date: new Date('2023-07-12')
    },
    {
        id:'e3',
        description:'A pair of shoes',
        amount:58.99,
        date: new Date('2023-04-23')
    },
    {
        id:'e4',
        description:'A book',
        amount:14.99,
        date: new Date('2022-05-19')
    },
    {
        id:'e5',
        description:'Another work',
        amount:18.59,
        date: new Date('2022-05-18')
    },
    {
        id:'e6',
        description:'A Samsung screen',
        amount:289.99,
        date: new Date('2022-12-12')
    },
    {
        id:'e7',
        description:'A cable',
        amount:8.99,
        date: new Date('2023-03-23')
    },
    {
        id:'e8',
        description:'An apple',
        amount:4.99,
        date: new Date('2023-01-19')
    },
    {
        id:'e9',
        description:'A pencil',
        amount:21.59,
        date: new Date('2022-08-18')
    }
]


export const ExpensesContext= createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description,amount,date})=>{}
})

function expensesReducer(state,action){
    switch (action.type){
        case 'ADD':
            const id=new Date().toString() + Math.random().toString();
            return [{...action.payload,id:id}, ...state]
        case'UPDATE':
            const updatableExpenseIndex=state.findIndex(
                (expense)=>expense.id===action.payload.id
            )
            const updatableExpense=state[updatableExpenseIndex];
            const updateItem={...updatableExpense,...action.payload.data}
            const updatedExpenses=[...state]
            updatedExpenses[updatableExpenseIndex]=updateItem;
            return updatedExpenses;
        case'DELETE':
                return state.filter((expense)=>expense.id!==action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){
   const [expensesState,dispatch]=useReducer(expensesReducer, DUMMY_EXPENSES)

    function addExpense(expenseData){
        dispatch({type:'ADD',payload:expenseData})
    }

    function deleteExpense(id){
        dispatch({type:'DELETE',payload:id})
    }

    function updateExpense(id,expenseData){
        dispatch({type:'DELETE',payload:{id:id,data:expenseData}})
    }

    const value={
        expenses:expensesState,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense,
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;