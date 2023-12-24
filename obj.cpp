#include<iostream>
using namespace std;

class worker
{
  public:
  char wname[20];
  int num_of_hr;
  float sal,pay_rate;

  void accept(){
       cout<<"\n wname=";
       cin>>wname;
       cout<<"\n num_of_hr=";
       cin>>num_of_hr;


  }

  void cal( float pay_rate=5.0f){
        float sal=pay_rate*num_of_hr;
        cout<<"total sal of worker is..."<<sal;

  }
  void disp(){
       
       cout<<"\n wname="<<wname;
      //cout<<"\n total sal="<<sal;
     
  }


};


int main(){

worker ob;
ob.accept();
ob.cal();
ob.disp();
    
}