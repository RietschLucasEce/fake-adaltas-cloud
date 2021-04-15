---
title: Kubernetes
section: onboarding
sort: 40
---

# Kubernetes configuration and authentication

Kubernetes is a platform for the orchestration and the management of containers. A Kubernetes cluster is at your disposal and you have access to the namespace named after your group name.

To start working with Kubernetes, you must have the Kubernetes configuration setup and you must be authentified using our OAuth provider.

### Kube Config

A configuration file known as 'kube config' (commonly located in `~/.kube/config`) is needed in order to use `kubectl` and interact with the Kubernetes cluster.

When interacting with Kubernetes from the **edge node**, the environment is already configured. You can jump to the next section with instructions on how to login and start using [`kubectl`](/en/docs/kubernetes/kubectl/).

It is also possible to configure other environments such as the one on your host machine with the instruction below.


Start by [installing `kubectl`](https://kubernetes.io/docs/tasks/tools/) following the documentations of your targeted environment. By default, the tool expect the presence of a `~/.kube/config` file. This file contains the basic information to interact with the Kuberntes cluster. You can gain a copy of its content from the **edge node**:

```bash
cat /etc/kubernetes/base_config
```

Now import or copy paste its content. For example, from your Linux environment:

```bash
mkdir ~/.kube
# Replace {username}, enter your password when prompted.
scp {username}@edge-1.au.adaltas.cloud:/etc/kubernetes/base_confi ~/.kube/config
```

#### Login

To login, go to [this page](https://k8s-wrk-1.au.adaltas.cloud:32000/auth?client_id=au-k8s&redirect_uri=http%3A%2F%2Fk8s-adm-1.au.adaltas.cloud%3A5555%2Fcallback&response_type=code&scope=groups+audience%3Aserver%3Aclient_id%3Aau-k8s+openid+profile+email+offline_access&state=I+wish+to+wash+my+irish+wristwatch).

![Login page](./assets/login.png)

The credentials are the one you received via email when you were registered to the cluster.

Once you logged in, click **"Grant Access"** then copy the **"Access Token"** and **"Refresh Token"** in environment variables of your ssh session:

```
ACCESS_TOKEN=XXXXXX
REFRESH_TOKEN=XXXXXX
```

Then run the following command to save these credentials in your local `~/.kube/config` file:

```
kubectl config set-credentials kubernetes-user \
   --auth-provider=oidc \
   --auth-provider-arg=idp-issuer-url=https://k8s-wrk-1.au.adaltas.cloud:32000 \
   --auth-provider-arg=client-id=au-k8s \
   --auth-provider-arg=client-secret=ZXhhbXBsZS1hcHAtc2VjcmV0 \
   --auth-provider-arg=idp-certificate-authority=/etc/ipa/ca.crt \
   --auth-provider-arg=refresh-token=$REFRESH_TOKEN \
   --auth-provider-arg=id-token=$ACCESS_TOKEN
```

Your `~/.kube/config` file has been appended with you credentials and you should then be able to run `kubectl` commands. The token is available for a couple hours.

**Note**: next time you log-in, only the last two fields are required as the others will already be known:

```
kubectl config set-credentials kubernetes-user \
   --auth-provider-arg=refresh-token=$REFRESH_TOKEN \
   --auth-provider-arg=id-token=$ACCESS_TOKEN
```
