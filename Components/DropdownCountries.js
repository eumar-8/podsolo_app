import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { getCountries } from "../api";

export default class DropdownCountries extends React.Component {
  state = {
    countries: [],
    selectedCountry: ""
  };

  componentDidMount() {
    getCountries().then(countries => {
      this.setState({ countries, selectedCountry: countries[0].name });
      if (typeof this.props.onChange === "function") {
        this.props.onChange(countries[0].code);
      }
    });
  }

  onChange = countryName => {
    const countryItem = this.state.countries.find(
      country => country.name === countryName
    );
    if (typeof this.props.onChange === "function") {
      this.props.onChange(countryItem.code);
    }
  };

  render() {
    let objData = [];
    let { countries } = this.state;
    countries.map(el => {
      objData.push({ value: el.name });
    });
    let data = objData;

    return (
      <Dropdown
        pickerStyle={{
          marginTop: 30
        }}
        data={data}
        value={this.state.selectedCountry}
        onChangeText={this.onChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  }
});
