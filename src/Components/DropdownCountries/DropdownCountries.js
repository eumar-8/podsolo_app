import React from "react";
import {  View} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { getCountries } from "../../api";
import styles from "./DropdownCountrieStyle"

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
      <View style={styles.container}>
        <View style={styles.ContainerDropdown}>
          <Dropdown
            style={styles.menuContent}
            label="Country"
            data={data}
            value={this.state.selectedCountry}
            onChangeText={this.onChange}
            baseColor={"#30343f"}
            animationDuration={300}
            dropdownPosition={0}
            dropdownOffset={{ top: 30, left: 10 }}
            pickerStyle={{
              marginTop: 47,
              borderRadius: 5
            }}
          />
        </View>
      </View>
    );
  }
}

