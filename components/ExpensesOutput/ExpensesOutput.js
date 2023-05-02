import { View,StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

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


const ExpensesOutput = ({expenses,expensesPeriod}) => {
  return (
    <View style={styles.container}>
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }
})