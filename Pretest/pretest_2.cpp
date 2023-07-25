#include <iostream>
#include<cmath>
using namespace std ;

int main() {
    int A,B,C ;
    cout<<"Please enter A: " ;
    cin>>A ;
    cout<<"Please enter B: " ;
    cin>> B ;
    C=((A+B)%10) ;
    while(C<11){
        cout<<C ;
        if(C==0){
            cout<<A+B ;
        }else{
            cout<<(A+B)%C ;
        }
        if(A>B){
            cout<<"7" ;
            C++ ;
        }else{
            C++ ;
        }
    
}
    cout<<pow((A+B),2) ;

}
