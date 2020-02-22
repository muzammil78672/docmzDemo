import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeButton from 'react-native-really-awesome-button';

import {Colors, Api} from '../constants';
import {Axios} from '../config';

class Landing extends Component {
  state = {
    selectedOption: 1,
    doctorsList: [],
    specialityList: [],
    isLoading: true,
  };

  async componentDidMount() {
    try {
      let doctorList = await Axios.post(Api.doctors + Api.getDoctors);
      let specialityList = await Axios.get(Api.doctors + Api.getSpecialities);
      this.setState({
        doctorsList: doctorList.data.data,
        specialityList: specialityList.data.data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({isLoading: false});
      alert(error.message);
    }
  }

  render() {
    return (
      <View
        onStartShouldSetResponderCapture={() => {
          this.setState({enableScrollViewScroll: true});
        }}
        style={{flex: 1}}>
        <ScrollView scrollEnabled={this.state.enableScrollViewScroll}>
          <View
            style={{
              minHeight: hp('12%'),
              width: wp('100%'),
              justifyContent: 'center',
              backgroundColor: Colors.purple,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: wp('20%'),
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Indore</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: wp('8%'),
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="angle-down"
                  size={20}
                  color="black"
                  style={{backgroundColor: Colors.white}}
                />
              </View>
              <View
                style={{
                  backgroundColor: Colors.white,
                  width: wp('10%'),
                  height: 46,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: wp('3%'),
                }}>
                <Icon
                  name="search"
                  size={20}
                  color="gray"
                  style={{backgroundColor: Colors.white}}
                />
              </View>
              <TextInput
                placeholder="Search doctors, specialities, clinic..."
                style={{
                  width: wp('40%'),
                  height: 46,
                  backgroundColor: Colors.white,
                }}
              />
              <TouchableNativeFeedback>
                <View
                  style={{
                    backgroundColor: Colors.white,
                    width: wp('10%'),
                    height: 46,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                  }}>
                  <Icon
                    name="filter"
                    size={20}
                    color="gray"
                    style={{backgroundColor: Colors.white}}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View
            style={{
              minHeight: hp('15%'),
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <AwesomeButton
              backgroundColor={
                this.state.selectedOption === 1 ? Colors.yellow : Colors.gray
              }
              backgroundActive={
                this.state.selectedOption === 1 ? Colors.yellow : Colors.gray
              }
              backgroundDarker={
                this.state.selectedOption === 1 ? Colors.yellow : Colors.gray
              }
              textColor={
                this.state.selectedOption === 1 ? Colors.gray : Colors.white
              }
              height={hp('10')}
              width={hp('20')}
              onPress={() => this.setState({selectedOption: 1})}>
              {/* <View
                style={{
                  minHeight: hp('10%'),
                  width: hp('20%'),
                  backgroundColor:
                    this.state.selectedOption === 1 ? 'yellow' : 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Consult Now</Text>
              </View> */}
              Consult Now
            </AwesomeButton>
            <AwesomeButton
              backgroundColor={
                this.state.selectedOption === 2 ? Colors.yellow : Colors.gray
              }
              backgroundActive={
                this.state.selectedOption === 2 ? Colors.yellow : Colors.gray
              }
              backgroundDarker={
                this.state.selectedOption === 2 ? Colors.yellow : Colors.gray
              }
              textColor={
                this.state.selectedOption === 2 ? Colors.gray : Colors.white
              }
              height={hp('10')}
              width={hp('20')}
              onPress={() => this.setState({selectedOption: 2})}>
              {/* <View
                style={{
                  minHeight: hp('10%'),
                  width: hp('20%'),
                  backgroundColor:
                    this.state.selectedOption === 2 ? 'yellow' : 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Schedule</Text>
              </View> */}
              Schedule
            </AwesomeButton>
          </View>
          <View
            onStartShouldSetResponderCapture={() => {
              this.setState({enableScrollViewScroll: false});
            }}
            style={{
              maxHeight: hp('35%'),
              backgroundColor: Colors.white,
            }}>
            <View
              style={{
                minHeight: hp('8%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: wp('5%'),
                borderBottomWidth: 1,
                borderBottomColor: Colors.lightGray,
              }}>
              <Text>Doctors Available</Text>
              <TouchableNativeFeedback>
                <Text style={{color: Colors.blue}}>View All</Text>
              </TouchableNativeFeedback>
            </View>

            <ScrollView contentContainerStyle={{minHeight: hp('30%')}}>
              {this.state.doctorsList.length > 0 ? (
                this.state.doctorsList.map(doctor => {
                  return (
                    <TouchableNativeFeedback key={doctor._id}>
                      <View
                        style={{
                          minHeight: hp('15%'),
                          width: wp('100%'),
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                        }}>
                        <Icon
                          name="user-circle-o"
                          size={60}
                          color={Colors.gray}
                        />
                        <View style={{width: '50%'}}>
                          <Text>{'Dr. ' + doctor.basic.name}</Text>
                          <Text style={{color: Colors.gray}}>{'N/A'}</Text>
                          <Text style={{color: Colors.gray}}>
                            {doctor.basic.organization_name}
                          </Text>
                        </View>
                        <TouchableNativeFeedback>
                          <View
                            style={{
                              height: 30,
                              width: 60,
                              backgroundColor: Colors.blue,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: Colors.white}}>Book</Text>
                          </View>
                        </TouchableNativeFeedback>
                      </View>
                    </TouchableNativeFeedback>
                  );
                })
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp('20%'),
                  }}>
                  {this.state.isLoading ? (
                    <ActivityIndicator size="large" color={Colors.purple} />
                  ) : (
                    <Text>No doctors found</Text>
                  )}
                </View>
              )}
            </ScrollView>
          </View>
          <View
            style={{
              minHeight: hp('25%'),
              marginTop: hp('3%'),
              backgroundColor: Colors.white,
            }}>
            <Text
              style={{marginLeft: wp('3%'), marginTop: hp('1%'), fontSize: 18}}>
              Find doctors in top specialities
            </Text>
            <ScrollView
              horizontal={this.state.specialityList.length > 0}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: wp('3%'),
                minHeight: hp('20%'),
              }}>
              {this.state.specialityList.length > 0 ? (
                this.state.specialityList.map(speciality => {
                  return (
                    <TouchableNativeFeedback key={speciality._id}>
                      <View
                        style={{
                          minHeight: hp('18%'),
                          width: hp('15%'),
                          elevation: 2,
                          borderRadius: 7,
                          backgroundColor: Colors.white,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: wp('5%'),
                          padding: wp('3%'),
                        }}>
                        <Text style={{textAlign: 'center'}}>
                          {speciality.name}
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  );
                })
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp('20%'),
                  }}>
                  {this.state.isLoading ? (
                    <ActivityIndicator size="large" color={Colors.purple} />
                  ) : (
                    <Text>No speciality found</Text>
                  )}
                </View>
              )}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Landing;
