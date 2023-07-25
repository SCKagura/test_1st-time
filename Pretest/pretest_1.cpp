#include<iostream>
#include<string>
using namespace std ;

int main(){
    string name,gender ;
    cout<<"What is your name?: " ;
    cin>>name ;
    cout<<"What is your gender?: " ;
    cin>>gender ;
    if (gender=="Male"){
        cout<<"Hello, Mr. "<<name<<"." ;
    }
    if(gender=="Female") {
        cout<<"Hello, Ms. "<<name<<"." ;
    }
  
    if(gender!="Male" and gender!="Female"){
        cout<<"Error!!!";
    }
      return 0;
}
