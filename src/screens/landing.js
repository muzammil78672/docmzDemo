import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

class Landing extends Component {
  state = {
    selectedOption: 1,
  };

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
              backgroundColor: 'purple',
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
                  style={{backgroundColor: 'white'}}
                />
              </View>
              <View
                style={{
                  backgroundColor: 'white',
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
                  style={{backgroundColor: 'white'}}
                />
              </View>
              <TextInput
                placeholder="Search doctors, specialities, clinic..."
                style={{width: wp('40%'), height: 46, backgroundColor: 'white'}}
              />
              <TouchableNativeFeedback>
                <View
                  style={{
                    backgroundColor: 'white',
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
                    style={{backgroundColor: 'white'}}
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
            <TouchableNativeFeedback
              onPress={() => this.setState({selectedOption: 1})}>
              <View
                style={{
                  minHeight: hp('10%'),
                  width: hp('20%'),
                  backgroundColor:
                    this.state.selectedOption === 1 ? 'yellow' : 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Consult Now</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.setState({selectedOption: 2})}>
              <View
                style={{
                  minHeight: hp('10%'),
                  width: hp('20%'),
                  backgroundColor:
                    this.state.selectedOption === 2 ? 'yellow' : 'white',
                  elevation: 2,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Schedule</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            onStartShouldSetResponderCapture={() => {
              this.setState({enableScrollViewScroll: false});
            }}
            style={{
              maxHeight: hp('35%'),
              backgroundColor: 'white',
            }}>
            <View
              style={{
                minHeight: hp('8%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: wp('5%'),
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
              }}>
              <Text>Doctors Available</Text>
              <TouchableNativeFeedback>
                <Text style={{color: 'deepskyblue'}}>View All</Text>
              </TouchableNativeFeedback>
            </View>

            <ScrollView>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: wp('100%'),
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Icon name="user-circle-o" size={60} color="gray" />
                  <View style={{width: '50%'}}>
                    <Text>Dr. Jay Verma</Text>
                    <Text style={{color: 'gray'}}>Dentist</Text>
                    <Text style={{color: 'gray'}}>Dr. Verma's Clinic</Text>
                  </View>
                  <TouchableNativeFeedback>
                    <View
                      style={{
                        height: 30,
                        width: 60,
                        backgroundColor: 'deepskyblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Book</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </TouchableNativeFeedback>
            </ScrollView>
          </View>
          <View
            style={{
              minHeight: hp('25%'),
              marginTop: hp('3%'),
              backgroundColor: 'white',
            }}>
            <Text
              style={{marginLeft: wp('3%'), marginTop: hp('1%'), fontSize: 18}}>
              Find doctors in top specialities
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: wp('3%'),
              }}>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Womens Health</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Skin Specialist</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Ortho Specialist</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Dental Care</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View
                  style={{
                    minHeight: hp('15%'),
                    width: hp('12%'),
                    elevation: 2,
                    borderRadius: 7,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: wp('3%'),
                    padding: wp('3%'),
                  }}>
                  <Text style={{textAlign: 'center'}}>Mens Health</Text>
                </View>
              </TouchableNativeFeedback>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Landing;
