/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, View, Text, FlatList,Image,ActivityIndicator} from 'react-native';

export default class App extends Component
{
    constructor(props)
    {
      super(props)
      this.state = {
        data: [],
        page:1,
        isLoading: false
      }
    }


    componentDidMount()
    {
      this.setState({isLoading: true},this.getData)
      
    }

    getData = async ()=>
    {
    const apiURL="https://jsonplaceholder.typicode.com/photos?_limit=5&_page="+ this.state.page; 
    console.log(apiURL);
    fetch(apiURL).then ((res)=> res.json())
    .then((resJson)=>{
      this.setState({
        data: this.state.data.concat(resJson),
        isLoading: false
      })
    })
    }

    renderRow = ({item}) =>{
      return (
        <View style={styles.itemRow}> 
          <Image 
            source={{uri :item.url}}
            style={styles.itemImage}
          />
          <Text>{item.title}</Text>
          <Text>{item.id}</Text>
        </View>
      
      )
    }

    rendefooter = () =>
    {
       return(
         this.state.isLoading ? 
         <View style={styles.loader}>
          <ActivityIndicator size="large"/>
         </View>: null
       )
    }

    HandleLoadMore = ()=>
    {
      this.setState({ page: this.state.page + 1, isLoading:true}, this.getData)
    }
    render(){
      return (
      
          <FlatList
            style={styles.container}
            data={this.state.data}
            renderItem={this.renderRow}
            keyExtractor={(item, index)=> index.toString()}
            onEndReached={this.HandleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this.rendefooter}
          />      
    )
    }
}
const styles = StyleSheet.create({
  container:{ 
    backgroundColor:'#F5FCFF'
  },
  itemRow:
  {
    borderBottomColor:'#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemImage:
  {
    width: '100%',
    height: 200,
    resizeMode:'cover'
  }
});
