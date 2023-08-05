class Counter {
  constructor(parent, service, id) {
    this.id = id
    this.parent = parent
    this.service = service
    service.getCurrentValue(id).then(i => {
      this.value = i
      this.render()
      this.assignListeners()
    })
  }

  render() {
    const counter = document.createElement('div')
    counter.class = 'counter'
    counter.dataset.id = this.id
    this.parent.appendChild(counter)

    counter.innerHTML = `
      <button class="dec">-</button>
      <span class="count">${this.value}</span>
      <button class="inc">+</button>
    `
    this.element = counter
  }

  assignListeners() {
    this.element.querySelector('.dec').onclick = async () => {
      this.value = await this.service.decrement(this.id)
      this.update()
    }

    this.element.querySelector('.inc').onclick = async () => {
      this.value = await this.service.increment(this.id)
      this.update()
    }
  }

  update() {
    this.element.querySelector('.count').innerHTML = this.value
  }
}


export { Counter }