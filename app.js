// Copyright 2022 Kyle King
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function submit_search_request(){
    // alert('Button has been pressed!')
    const httpRequest = new XMLHttpRequest();
    const query = "http://localhost:8888/comp2245-assignment4/superheroes.php"
    httpRequest.onreadystatechange = (e) => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
            let response = httpRequest.responseText;
            alert(response);
            } else {
                alert('There was a problem with the request.');
            }
           }
    }
    httpRequest.open('GET',query)
    httpRequest.send();
}