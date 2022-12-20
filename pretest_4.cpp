#include<iostream>
#include<cmath>
using namespace std;
double findMaxLoc(float a,float b,float c,float d) {
    int x[101],Result=0,i=0 ;
    double Max=0 ;
  
    while (i<101){ 
        x[i]=i ;
     
    double equ=(a*(sin((M_PI*x[i])/(pow(b,2)+1))))-(c*(cos((M_PI*x[i])/(pow(d,2)+1))));
           if (equ>=Max){
          Max=equ ;
            Result=x[i] ;
           }
           i++;
    }
          return Result;

}
        


int main() {
cout << findMaxLoc(-2.5,7.8,4,-10.3);
}