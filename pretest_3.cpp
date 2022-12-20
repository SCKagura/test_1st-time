#include<iostream>
#include<string>
using namespace std ;

int main(){
    int P[] = {1,2,100,12,0,-4,-2,3,1000,-100,3,-1,50,8,9};  
    int Q[] = {1,7,55,25,8,2,-5,12,2,1,2,-1,27,-7,19};
    int k,Result=0,i=0;
    cout<<"Enter k: " ;
    cin>> k ;
    while(i<15){
        if ((P[i]+Q[i])>(P[i]*Q[i])/k){
            Result++ ;
            i++ ;
        }else{
            i++ ;
        }
}
    cout<<"Answer = "<<Result ;
        return 0;

}